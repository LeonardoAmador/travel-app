export default interface Destination {
  name: string;
  image: string;
  description: string;
  experiences?: [
    {
      name?: string;
      slug?: string;
      image?: string;
    }
  ][];
}