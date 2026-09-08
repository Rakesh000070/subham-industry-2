import { Enquiry } from '@/types';

interface ApiResponse {
  success: boolean;
  message: string;
}

/**
 * Submits an enquiry to the backend API.
 */
export async function submitEnquiry(data: Enquiry): Promise<ApiResponse> {
  try {
    const response = await fetch('/api/enquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit enquiry');
    }

    return result as ApiResponse;
  } catch (error) {
    console.error('API Service Error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.',
    };
  }
}
