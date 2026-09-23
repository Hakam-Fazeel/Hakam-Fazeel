export interface UserInfo {
  name: string;
  title: string;
  institution: string;
  department: string;
  accolades: string[];
  email: string;
  github: string;
  linkedin: string;
  laidlawNetwork: string;
  bio: string;
  interests: string[];
}

export const USER_INFO: UserInfo = {
  name: "Hakam Mohamed Fazeel",
  title: "Mechanical Engineering Undergraduate",
  institution: "Imperial College London",
  department: "Department of Mechanical Engineering",
  accolades: ["Laidlaw Scholar", "UROP Researcher 2026"],
  email: "hakam.mohamed-fazeel25@imperial.ac.uk",
  github: "https://github.com/Hakam-Fazeel",
  linkedin: "https://www.linkedin.com/in/hakam-mohamed-fazeel/",
  laidlawNetwork: "https://laidlawscholars.network/users/hakam-mohamed-fazeel",
  bio: "Mechanical Engineering student at Imperial College London with a focus on finite element simulations (CAE), computational tribology, numerical optimization, and sustainable lightweight manufacturing.",
  interests: [
    "FEA & CAE Simulations",
    "Numerical Solvers (MATLAB)",
    "Tribology & EHL",
    "Automotive Lightweighting",
    "Sustainable Manufacturing"
  ]
};

export default USER_INFO;
