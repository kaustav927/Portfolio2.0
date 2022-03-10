<<<<<<< HEAD
export enum Form {
    Initial,
    Loading,
    Success,
    Error
  }
  
  export type FormState = {
    state: Form;
    message?: string;
  };
  
  export type Subscribers = {
    count: number;
  };
  
  export type Views = {
    total: number;
  };
  
  export type Song = {
    songUrl: string;
    artist: string;
    title: string;
  };
  
  export type NowPlayingSong = {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
  };
  
  export type TopTracks = {
    tracks: Song[];
  };
  
  export type YouTube = {
    subscriberCount: number;
    viewCount: number;
  };
  
  export type GitHub = {
    stars: number;
  };
  
  export type Gumroad = {
    sales: number;
  };
  
  export type Unsplash = {
    downloads: number;
    views: number;
=======
export enum Form {
    Initial,
    Loading,
    Success,
    Error
  }
  
  export type FormState = {
    state: Form;
    message?: string;
  };
  
  export type Subscribers = {
    count: number;
  };
  
  export type Views = {
    total: number;
  };
  
  export type Song = {
    songUrl: string;
    artist: string;
    title: string;
  };
  
  export type NowPlayingSong = {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
  };
  
  export type TopTracks = {
    tracks: Song[];
  };
  
  export type YouTube = {
    subscriberCount: number;
    viewCount: number;
  };
  
  export type GitHub = {
    stars: number;
  };
  
  export type Gumroad = {
    sales: number;
  };
  
  export type Unsplash = {
    downloads: number;
    views: number;
>>>>>>> 0255f14a95f05bd45185797dfb15e60e8f9f129b
  };