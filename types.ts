import React from 'react';

export interface ProblemCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface SolutionPillar {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  avatar: string;
  name: string;
  title: string;
  company: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
