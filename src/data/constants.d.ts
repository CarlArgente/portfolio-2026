declare module '@/data/constants.js' {
  export const Bio: {
    name: string
    roles: string[]
    description: string
    github: string
    resume: string
    linkedin: string
    twitter: string
    insta: string
    facebook: string
  }

  export const TestimonialPersons: Array<{
    image: string
    name: string
    company: string
    position: string
    desc: string
  }>

  export const skills: Array<{
    title: string
    skills: Array<{
      name: string
      image: string
    }>
  }>

  export const projects: Array<{
    id: number
    title: string
    date: string
    description: string
    image: string
    tags: string[]
    category: string
    github: string
    webapp: string
  }>

  export const education: Array<{
    id: number
    img: string
    school: string
    date: string
    grade: string
    desc: string
    degree: string
  }>
}
