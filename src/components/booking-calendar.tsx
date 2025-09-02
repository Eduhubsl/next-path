"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar as CalendarIcon, User, ArrowRight } from "lucide-react";
import { format, addDays, isSameDay, isAfter, startOfDay } from "date-fns";

// Sample time slots (would come from backend in real app)
const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM",
  "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
];

// Sample consultant data
const consultants = [
  { id: 1, name: "Dr. Priya Wijesinghe", specialty: "Career Guidance Expert", avatar: "PW" },
  { id: 2, name: "Mr. Kamal Fernando", specialty: "University Counselor", avatar: "KF" },
  { id: 3, name: "Ms. Anusha Perera", specialty: "Study Abroad Specialist", avatar: "AP" }
];

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedConsultant, setSelectedConsultant] = useState<number | null>(null);
  const [step, setStep] = useState<'date' | 'time' | 'consultant' | 'confirm'>('date');

  // Disable past dates
  const disabledDays = (date: Date) => {
    return !isAfter(date, startOfDay(new Date()));
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setStep('time');
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('consultant');
  };

  const handleConsultantSelect = (consultantId: number) => {
    setSelectedConsultant(consultantId);
    setStep('confirm');
  };

  const handleBooking = () => {
    // Handle booking submission
    alert('Booking confirmed! You will receive a confirmation email shortly.');
    // Reset form
    setSelectedDate(undefined);
    setSelectedTime("");
    setSelectedConsultant(null);
    setStep('date');
  };

  const resetToStep = (newStep: 'date' | 'time' | 'consultant' | 'confirm') => {
    setStep(newStep);
    if (newStep === 'date') {
      setSelectedDate(undefined);
      setSelectedTime("");
      setSelectedConsultant(null);
    } else if (newStep === 'time') {
      setSelectedTime("");
      setSelectedConsultant(null);
    } else if (newStep === 'consultant') {
      setSelectedConsultant(null);
    }
  };

  return (
    <Card className="gentle-shadow border-0 max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-serif">Book Your Consultation</CardTitle>
        <CardDescription className="text-base">
          Select your preferred date, time, and consultant for your free consultation
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Progress indicator */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
            step === 'date' ? 'bg-primary text-white' :
            ['time', 'consultant', 'confirm'].includes(step) ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
          }`}>
            1
          </div>
          <div className={`w-8 h-1 rounded transition-colors ${
            ['time', 'consultant', 'confirm'].includes(step) ? 'bg-primary' : 'bg-muted'
          }`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
            step === 'time' ? 'bg-primary text-white' :
            ['consultant', 'confirm'].includes(step) ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
          }`}>
            2
          </div>
          <div className={`w-8 h-1 rounded transition-colors ${
            ['consultant', 'confirm'].includes(step) ? 'bg-primary' : 'bg-muted'
          }`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
            step === 'consultant' ? 'bg-primary text-white' :
            step === 'confirm' ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
          }`}>
            3
          </div>
          <div className={`w-8 h-1 rounded transition-colors ${
            step === 'confirm' ? 'bg-primary' : 'bg-muted'
          }`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
            step === 'confirm' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
          }`}>
            4
          </div>
        </div>

        {/* Step 1: Date Selection */}
        {step === 'date' && (
          <div className="text-center">
            <h3 className="text-lg font-serif font-medium mb-4 flex items-center justify-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Choose a Date
            </h3>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                disabled={disabledDays}
                initialFocus
                className="rounded-lg border"
              />
            </div>
          </div>
        )}

        {/* Step 2: Time Selection */}
        {step === 'time' && selectedDate && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-serif font-medium flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Choose a Time
              </h3>
              <Button variant="ghost" size="sm" onClick={() => resetToStep('date')}>
                Change Date
              </Button>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 mb-4">
              <p className="font-medium">{format(selectedDate, 'EEEE, MMMM d, yyyy')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => handleTimeSelect(time)}
                  className="h-12"
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Consultant Selection */}
        {step === 'consultant' && selectedDate && selectedTime && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-serif font-medium flex items-center gap-2">
                <User className="w-5 h-5" />
                Choose Your Consultant
              </h3>
              <Button variant="ghost" size="sm" onClick={() => resetToStep('time')}>
                Change Time
              </Button>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 mb-4">
              <p className="font-medium">
                {format(selectedDate, 'EEEE, MMMM d, yyyy')} at {selectedTime}
              </p>
            </div>
            <div className="space-y-3">
              {consultants.map((consultant) => (
                <Card
                  key={consultant.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedConsultant === consultant.id ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-muted/30'
                  }`}
                  onClick={() => handleConsultantSelect(consultant.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="font-medium text-primary">{consultant.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{consultant.name}</p>
                        <p className="text-sm text-muted-foreground">{consultant.specialty}</p>
                      </div>
                      {selectedConsultant === consultant.id && (
                        <Badge variant="default">Selected</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 'confirm' && selectedDate && selectedTime && selectedConsultant && (
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-center">
              Confirm Your Booking
            </h3>

            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium">{format(selectedDate, 'EEEE, MMMM d, yyyy')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Consultant:</span>
                    <span className="font-medium">
                      {consultants.find(c => c.id === selectedConsultant)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">60 minutes</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="text-muted-foreground">Cost:</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                      Free
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button variant="outline" onClick={() => resetToStep('consultant')} className="flex-1">
                Back
              </Button>
              <Button onClick={handleBooking} className="flex-1">
                Confirm Booking
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
