export interface WikipediaResponse{
    batchcomplete: string;
    continue: {
        sroffset: number;
        continue: string;
    };
    query: {
        searchinfo: {
            totalhits: number;
            suggestion: string;
            suggestionsnippet: string;
        };
        search: Page[];
    };
}

export interface Page{
    ns: number;
    title: string;
    pageid: number;
    size: number;
    wordcount: number;
    snippet: string;
    timestamp: string;
  }