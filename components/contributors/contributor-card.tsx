import React from 'react'
import { TypeContributors } from "@/types/contributors";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ContributorCardProps = {
    contributor: TypeContributors;
};

const ContributorCard: React.FC<ContributorCardProps> = ({contributor}) => {
  return (
    <div>
        <Card className="flex items-center container w-full sm:w-48 p-6 gap-4 scale-100 hover:scale-105 transition-transform duration-200 bg-primary/50 ease-in-out shadow-md">
            <div className="relative">
            <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className="w-32 h-32 rounded-full object-cover"
                onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
                }}
            />
            <div>
                <span className="absolute text-sm font-semibold bg-background bottom-2 right-2 rounded-full w-6 h-6 text-center text-foreground aspect-square">{contributor.contributions}</span>
            </div>
            </div>
            <CardContent className="flex flex-col w-full px-0 text-center">
            <p className="text-lg font-semibold font-mono truncate" title={contributor.login}>{contributor.login}</p>
            <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="mt-2 cursor-pointer bg-background text-foreground hover:bg-background/80 w-full">
                View Profile
                </Button>
            </a>
            </CardContent>
        </Card>
    </div>
  )
}

export default ContributorCard