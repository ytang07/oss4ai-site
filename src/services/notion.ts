export async function getEventImages() {
  try {
    const response = await fetch('/api/event-images');
    if (!response.ok) {
      // Handle HTTP errors
      const errorData = await response.json();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error || 'Unknown error'}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching event images:", error);
    // Return an empty array or throw an error as appropriate
    return [];
  }
}
