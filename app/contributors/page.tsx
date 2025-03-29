"use client"
import { useEffect, useState } from "react";
import { TypeContributors } from "@/types/contributors";
import ContributorCard from "@/components/contributors/contributor-card";

interface TypeRepoDetails {
  owner: string;
  repo: string;
}

const RepoDetails: TypeRepoDetails = {
  owner: process.env.NEXT_PUBLIC_GITHUB_OWNER || "iiitl",
  repo: process.env.NEXT_PUBLIC_GITHUB_REPO || "student-hub",
  
};

const Contributors = () => {
  const [contributors, setContributors] = useState<TypeContributors[]>([]);
  const [sortBy, setSortBy] = useState<string>("contributions");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (sortBy === "contributions") {
      setContributors((prev) => [...prev].sort((a, b) => b.contributions - a.contributions));
    } else if (sortBy === "name") {
      setContributors((prev) => [...prev].sort((a, b) => a.login.localeCompare(b.login)));
    }
  }, [sortBy]);

  useEffect(() => {
    const fetchContributors = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/repos/${RepoDetails.owner}/${RepoDetails.repo}/contributors`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch contributors");
        }
        const data = await response.json();
        setContributors(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContributors();
  }, []);

  if (error) return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-center max-w-md">
        <h2 className="text-xl font-bold text-red-600 mb-2">Unable to load contributors</h2>
        <p className="text-red-500">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-red-600 text-foreground rounded hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex w-screen flex-col bg-gradient-to-b from-background to-muted items-center gap-4 p-4 pt-8 pb-16">
      <h1 className="text-3xl font-bold my-4 text-foreground">Our Contributors</h1>
      <div>
        <p className="text-lg text-foreground text-center">These are the amazing people who have contributed to this project.</p>
      </div>
      <div className="flex justify-center items-center my-4">
        Sort By:
        <select className="ml-2 p-2 rounded-md bg-background text-foreground" onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="contributions">Contributions</option>
          <option value="name">Name</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {contributors.length === 0 && !isLoading && (
          <div className="flex flex-col items-center justify-center w-full py-12">
            <p className="text-xl text-background text-center">No contributors found</p>
          </div>
        )}
        {isLoading && (
          <div className="flex flex-col items-center justify-center w-full py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-foreground"></div>
            <p className="mt-4 text-foreground">Loading contributors...</p>
          </div>
        )}
        {contributors.length > 0 && (      
          contributors.map((contributor) => (
            <ContributorCard key={contributor.id} contributor={contributor} />
          ))
        )}
      </div>
    </div>
  );
};

export default Contributors;
