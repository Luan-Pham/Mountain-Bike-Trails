const trail = async () => {
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
