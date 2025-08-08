"use client";

import React from 'react';
import { Clock, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-12 text-center">
        {/* Clock Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto">
            <Clock className="w-10 h-10 text-white" />
          </div>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        
        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        {/* Action Buttons */}
        <div className="space-y-3 mb-8">
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </button>
          
          <button 
            onClick={() => window.history.back()}
            className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
        
        {/* Footer */}
        <p className="text-sm text-gray-500">
          ©{new Date().getFullYear()} LearneX. All rights reserved.
        </p>
      </div>
    </div>
  );
}