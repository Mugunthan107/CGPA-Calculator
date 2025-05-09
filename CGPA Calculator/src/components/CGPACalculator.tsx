import React, { useState, useEffect } from 'react';
import {
  PlusCircle,
  Calculator,
  RotateCcw,
  Share2,
  GraduationCap,
} from 'lucide-react';
import Notification from '@/components/Notification';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface Subject {
  id: number;
  grade: string;
  credit: string;
}

const Index = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [nextId, setNextId] = useState(1);
  const [cgpa, setCgpa] = useState('0.00');
  const [isCalculated, setIsCalculated] = useState(false);
  const [notification, setNotification] = useState({ visible: false, message: '' });

  const handleGradeChange = (id: number, value: string) => {
    let numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      setSubjects(subjects.map(subj =>
        subj.id === id ? { ...subj, grade: '' } : subj
      ));
      return;
    }

    if (numericValue > 10) {
      numericValue = 10;
      toast({
        title: "Invalid Grade",
        description: "Grade cannot be greater than 10. Automatically set to 10.",
        variant: "destructive"
      });
    }

    setSubjects(subjects.map(subj =>
      subj.id === id ? { ...subj, grade: numericValue.toString() } : subj
    ));
  };

  const handleCreditChange = (id: number, value: string) => {
    let numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      setSubjects(subjects.map(subj =>
        subj.id === id ? { ...subj, credit: '' } : subj
      ));
      return;
    }

    if (numericValue > 5) {
      numericValue = 5;
      toast({
        title: "Invalid Credit",
        description: "Credit cannot be greater than 5. Automatically set to 5.",
        variant: "destructive"
      });
    }

    setSubjects(subjects.map(subj =>
      subj.id === id ? { ...subj, credit: numericValue.toString() } : subj
    ));
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const data = params.get('data');
    const cgpaParam = params.get('cgpa');

    if (data) {
      const subjectItems = data.split(',');
      const loadedSubjects = subjectItems.map((item, index) => {
        const [grade, credit] = item.split('-');
        return { id: index + 1, grade, credit };
      });

      setSubjects(loadedSubjects);
      setNextId(loadedSubjects.length + 1);

      if (cgpaParam) {
        setCgpa(cgpaParam);
        setIsCalculated(true);
      }
    } else {
      addSubject();
    }
  }, []);

  // Fix: Update addSubject to handle both direct calls and button click events
  const addSubject = (gradeOrEvent?: string | React.MouseEvent<HTMLButtonElement>, credit?: string) => {
    // If it's a MouseEvent, it means it was called from the button click
    const grade = typeof gradeOrEvent === 'object' ? '' : (gradeOrEvent || '');
    const newSubject = { id: nextId, grade, credit: credit || '' };
    setSubjects([...subjects, newSubject]);
    setNextId(nextId + 1);
  };

  const removeSubject = (id: number) => {
    if (subjects.length === 1) {
      setSubjects([{ id: 1, grade: '', credit: '' }]);
      setNextId(2);
    } else {
      setSubjects(subjects.filter(subject => subject.id !== id));
    }
  };

  const calculateCGPA = () => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    subjects.forEach((subject) => {
      const grade = parseFloat(subject.grade) || 0;
      const credit = parseFloat(subject.credit) || 0;

      totalGradePoints += grade * credit;
      totalCredits += credit;
    });

    const calculatedCGPA = totalCredits === 0 ? 0 : (totalGradePoints / totalCredits);
    const formattedCGPA = calculatedCGPA.toFixed(2);

    setCgpa(formattedCGPA);
    setIsCalculated(true);

    toast({
      title: "Calculation Complete",
      description: `Your CGPA is ${formattedCGPA}`,
    });
  };

  const resetCalculator = () => {
    setSubjects([{ id: 1, grade: '', credit: '' }]);
    setNextId(2);
    setCgpa('0.00');
    setIsCalculated(false);

    toast({
      title: "Reset Complete",
      description: "All inputs have been cleared",
    });
  };

  const shareCGPA = () => {
    const data = subjects.map(subject => `${subject.grade || '0'}-${subject.credit || '0'}`);
    const baseUrl = window.location.href.split('?')[0];
    const shareUrl = `${baseUrl}?data=${data.join(',')}&cgpa=${cgpa}`;

    navigator.clipboard.writeText(shareUrl).then(() => {
      showNotification('Link copied to clipboard');
      toast({
        title: "Success!",
        description: "CGPA calculation link copied to clipboard",
      });
    });
  };

  const showNotification = (message: string) => {
    setNotification({ visible: true, message });
  };

  const closeNotification = () => {
    setNotification({ ...notification, visible: false });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/30 to-blue-100/30 z-[-1]"></div>
      <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(147,51,234,0.07)_0%,rgba(255,255,255,0)_100%)] fixed inset-0 z-[-1]"></div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 mb-4">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent mb-4">
            CGPA Calculator
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your Cumulative Grade Point Average with precision and ease
          </p>
        </div>

        {/* Calculator Card */}
        <Card className="overflow-hidden shadow-xl bg-white border border-gray-200 rounded-2xl w-full max-w-3xl mx-auto">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-600 p-6">
            <div className="text-center">
              <Calculator className="h-9 w-9 text-white mx-auto mb-2" />
              <CardTitle className="text-2xl font-bold text-white">CGPA Calculator</CardTitle>
              <CardDescription className="text-purple-100 mt-3 text-base">
                Enter your subject grades and credits to calculate your CGPA
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Subject</h3>

              <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-1 text-center text-base font-medium text-gray-500">S.NO</div>
                <div className="col-span-5 text-center text-base font-medium text-gray-500">Grade (1-10)</div>
                <div className="col-span-5 text-center text-base font-medium text-gray-500">Credit (1-5)</div>
                <div className="col-span-1 text-center text-base font-medium text-gray-500">Delete</div>
              </div>

              {subjects.map((subject, index) => (
                <div key={subject.id} className="grid grid-cols-12 gap-4 mb-4">
                  <div className="col-span-1 flex items-center justify-center bg-blue-20 rounded-lg p-3 text-base text-blue-700 font-medium">
                    {index + 1}
                  </div>
                  <input
                    id={`grade${index + 1}`}
                    type="number"
                    min="1"
                    max="10"
                    value={subject.grade}
                    onChange={(e) => handleGradeChange(subject.id, e.target.value)}
                    className="col-span-5 border-2 border-blue-200 rounded-lg p-3 text-center text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="1-10"
                  />
                  <input
                    id={`credit${index + 1}`}
                    type="number"
                    min="1"
                    max="5"
                    value={subject.credit}
                    onChange={(e) => handleCreditChange(subject.id, e.target.value)}
                    className="col-span-5 border-2 border-blue-200 rounded-lg p-3 text-center text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="1-5"
                  />
                  <button
                    onClick={() => removeSubject(subject.id)}
                    className="col-span-1 flex items-center justify-center text-red-500 hover:text-red-700 text-xl"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <Button 
                onClick={addSubject} 
                variant="outline" 
                size="lg" 
                className="border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-3"
              >
                <PlusCircle className="h-5 w-5 mr-2" />
                Add Subject
              </Button>
              <Button 
                onClick={calculateCGPA} 
                variant="outline" 
                size="lg" 
                className="border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-3"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Calculate CGPA
              </Button>
              <Button 
                onClick={resetCalculator} 
                variant="outline" 
                size="lg" 
                className="border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-3"
              >
                <RotateCcw className="h-5 w-5 mr-2" />
                Reset
              </Button>
              <Button 
                onClick={shareCGPA} 
                variant="outline" 
                size="lg" 
                className="border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-3"
              >
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </Button>
            </div>

            <div className="text-center bg-gradient-to-r from-purple-50 to-indigo-50 py-8 rounded-xl border border-purple-100 shadow-inner">
              <div className="text-lg font-medium text-gray-600 mb-2">Your Result</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">{cgpa}</div>
              <div className="text-lg font-medium text-gray-600">CGPA</div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-black-500">
            Designed for simplicity and precision. Calculate your academic performance easily.
          </p>
        </div>
      </div>

      <Notification message={notification.message} isVisible={notification.visible} onClose={closeNotification} />
    </div>
  );
};
export default Index;
