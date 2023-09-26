declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        is_admin: boolean;
      };
    }
  }
}