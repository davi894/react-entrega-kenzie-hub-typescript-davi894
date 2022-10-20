export interface iCadastro {
    email: string,
    password: string,
    confirmPassword:string,
    name: string,
    bio: string,
    contact: string | number,
    course_module: string,
  }
  
export interface iLogin {
    email: string,
    password: string
  }
  
export interface iUserTechs {
    id: string,
    title: string,
    status: string,
    created_at: string,
    updated_at: string
  }
  
export interface iWorkUser {
    id: string,
    title: string,
    description: string,
    deploy_url: string,
    created_at: string,
    updated_at: string,
  }
  
export interface iInfoUserLogin {
  id: string,
  name: string,
  email: string,
  course_module: string,
  bio: string,
  contact: string,
  works: iWorkUser[],
  techs: iUserTechs[],
  created_at: string,
  updated_at: string,
  avatar_url: string,

  token: string
  }
  

  