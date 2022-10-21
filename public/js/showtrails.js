const trails = async () => {
  const response = await fetch('/api/trails', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/trails');
  } else {
    alert(response.statusText);
  }
};

//handler for delete button on trails page
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/reviews/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/trails');
    } else {
      alert('you cannot delete a review not posted by you');
    }
  }
};

document
    .querySelector('.review-display-list')
    .addEventListener('click', delButtonHandler);