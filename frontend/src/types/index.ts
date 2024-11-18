export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'attendee' | 'speaker' | 'organizer';
}

export interface Conference {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  price: number;
  capacity: number;
  attendees: string[];
  imageUrl: string;
  organizer: string;
  comments: Comment[];
  ratings: Rating[];
}

export interface Comment {
  _id?: string;
  userId: string;
  content: string;
  createdAt: string;
  userName?: string;
}

export interface Rating {
  userId: string;
  rating: number;
}

export interface LoginResponse {
  token: string;
  user: User;
}

