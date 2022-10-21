//review form
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#review-title').value.trim();
    const content = document.querySelector('#review-content').value.trim();
    const trail_id = document.querySelector('#trailId').value.trim();
  
    if (title && content && trail_id) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ title, content, trail_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/trails');
        alert('Successfully Created Review');
      } else {
        alert('Failed to create review');
      }
    }
  };
  
  document
    .querySelector('#submit-review-btn')
    .addEventListener('submit', newFormHandler);
  
    const reviews = async () => {
      const response = await fetch('/api/reviews', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/trails');
      } else {
        alert(response.statusText);
      }
    };
    