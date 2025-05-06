// filepath: secure-messaging-app/secure-messaging-app/src/types/index.d.ts
declare module "secure-messaging-app" {
  interface User {
    id: string;
    username: string;
    password: string;
  }

  interface Message {
    senderId: string;
    receiverId: string;
    content: string; 
    timestamp: Date;
  }

  interface Session {
    userId: string;
    csrfToken: string;
  }
}