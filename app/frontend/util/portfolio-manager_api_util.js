export const createAnalyticsObj = (companyName, tagName) => (
  $.ajax({
    method: "POST",
    url: "/api/links-manager/links",
    data: { companyName, tagName }
  })
);

export const fetchPortfolio = () => (
  $.ajax({
    method: "GET",
    url: "/api/portfolio-manager"
  })
);

export const createTag = tagName => (
  $.ajax({
    method: "POST",
    url: "/api/portfolio-manager/tag",
    data: { tagName }
  })
);

export const deleteTag = tagName => (
  $.ajax({
    method: "PATCH",
    url: "/api/portfolio-manager/tag",
    data: { tagName }
  })
);

export const updatePortfolio = (portfolioSection, sectionName, tagName) => {
  console.log(portfolioSection, sectionName, tagName);
  return $.ajax({
    method: "PATCH",
    url: "/api/portfolio-manager/portfolio",
    data: {
      portfolioSection: JSON.stringify(portfolioSection),
      sectionName,
      tagName
    }
  });
};
