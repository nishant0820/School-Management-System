"use client";
import React from 'react';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';

export default function Error() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Error Icon */}
        <div className="mx-auto w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-8">
          <AlertTriangle className="w-10 h-10 text-white" />
        </div>

        {/* Error Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          500 - Internal Server Error
        </h1>

        {/* Error Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Something went wrong on our end. We're working to fix this issue. 
          Please try again in a few moments or contact support if the problem persists.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </button>
          
          <button 
            onClick={() => window.history.back()}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2025 Agrikkom. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}