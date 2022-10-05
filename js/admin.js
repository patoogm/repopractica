const isAdmin = () => {
  const role = localStorage.getItem('role')

  if (role === 'admin') {
    alert('Bienvenido')
  } else {
    window.location.href = './index.html'
  }
}

isAdmin()