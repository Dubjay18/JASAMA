interface IMessage {
  role: string;
  content: string;
}

interface IApiResponse {
  success: boolean;
  data?: IMessage[];
  msg?: string;
}
