export interface ChildProfile {
  id: string;
  name: string;
  location: string;
  school: string;
  imageUrl: string;
  sponsorName?: string;
}

export interface Stats {
  meals: number;
  schools: number;
  children: number;
}
