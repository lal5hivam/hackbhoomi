// Google Sheets API Service for Inverthon Registration

interface RegistrationData {
  teamName: string;
  track: string;
  category: string;
  problemStatements: string[];
  teamLead: {
    name: string;
    studentId: string;
    mobile: string;
    email: string;
    github: string;
  };
  members: Array<{
    name: string;
    studentId: string;
    mobile: string;
    email: string;
    github: string;
  }>;
  timestamp: string;
}

export async function submitToGoogleSheets(data: RegistrationData): Promise<{ success: boolean; message: string }> {
  try {
    // Format data for Google Sheets
    const formattedData = {
      // Primary Column
      teamName: data.teamName,
      
      // Competition Details
      track: data.track,
      category: data.category || 'N/A',
      problemStatement1: data.problemStatements[0] || 'N/A',
      problemStatement2: data.problemStatements[1] || 'N/A',
      problemStatement3: data.problemStatements[2] || 'N/A',
      
      // Team Lead Information
      teamLeadName: data.teamLead.name,
      teamLeadStudentId: data.teamLead.studentId,
      teamLeadMobile: data.teamLead.mobile,
      teamLeadEmail: data.teamLead.email,
      teamLeadGithub: data.teamLead.github || 'N/A',
      
      // Member 2
      member2Name: data.members[0]?.name || 'N/A',
      member2StudentId: data.members[0]?.studentId || 'N/A',
      member2Mobile: data.members[0]?.mobile || 'N/A',
      member2Email: data.members[0]?.email || 'N/A',
      member2Github: data.members[0]?.github || 'N/A',
      
      // Member 3
      member3Name: data.members[1]?.name || 'N/A',
      member3StudentId: data.members[1]?.studentId || 'N/A',
      member3Mobile: data.members[1]?.mobile || 'N/A',
      member3Email: data.members[1]?.email || 'N/A',
      member3Github: data.members[1]?.github || 'N/A',
      
      // Member 4
      member4Name: data.members[2]?.name || 'N/A',
      member4StudentId: data.members[2]?.studentId || 'N/A',
      member4Mobile: data.members[2]?.mobile || 'N/A',
      member4Email: data.members[2]?.email || 'N/A',
      member4Github: data.members[2]?.github || 'N/A',
      
      // Member 5
      member5Name: data.members[3]?.name || 'N/A',
      member5StudentId: data.members[3]?.studentId || 'N/A',
      member5Mobile: data.members[3]?.mobile || 'N/A',
      member5Email: data.members[3]?.email || 'N/A',
      member5Github: data.members[3]?.github || 'N/A',
      
      // Metadata
      timestamp: data.timestamp,
    };

    // Send to API route
    const response = await fetch('/api/submit-registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit registration');
    }

    const result = await response.json();
    return { success: true, message: 'Registration submitted successfully!' };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to submit registration. Please try again.',
    };
  }
}
