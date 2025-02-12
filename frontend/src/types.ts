export type Country = {
  id: number;
  code: string;
  name: string;
  emoji: string;
  continent: Continent;
};

export type Continent = {
  id: number;
  name: string;
};

export type DataEntries = {
  code: string;
  name: string;
  emoji: string;
  continent: null;
};
