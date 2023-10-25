export interface iLogin {
  username: string;
  senha: string;
}

export interface iHit {
  employeeId: number;
  hitTime: Date;
  type: string;
}

export interface iNewUser {
  nome: string;
  sobrenome: string;
  username: string;
  senha: string;
  cpf: string;
  email: string;
}