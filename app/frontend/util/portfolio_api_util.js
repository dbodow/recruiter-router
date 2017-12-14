export const fetchPortfolio = () =>
  $.ajax({
    method: "GET",
    url: "api/portfolio"
  });
