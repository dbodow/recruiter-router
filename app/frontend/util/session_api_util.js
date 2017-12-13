export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/authentication/login',
    data: user
  })
);

export const register = user => (
  $.ajax({
    method: 'POST',
    url: '/api/authentication/register',
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/authentication/'
  })
);
