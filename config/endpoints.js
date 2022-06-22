const isLocalhost = true; // window.location.href.indexOf("localhost") !== -1;
const prefix = isLocalhost
  ? `http://localhost:3000`
  : `https://dpresume.herokuapp.com`;
const resources = `${prefix}/resources`;
const endpoints = {
  summary: `${resources}/summary.json`,
  achievements: `${resources}/achievements.json`,
  blogs: `${resources}/blogs.json`,
  demo: `${resources}/demo.json`,
  certifications: `${resources}/certifications.json`,
  education: `${resources}/education.json`,
  links: `${resources}/links.json`,
  prof_expr: `${resources}/prof_expr.json`,
  projects: `${resources}/projects.json`,
  skills: `${resources}/skills.json`,
};

export default endpoints;
