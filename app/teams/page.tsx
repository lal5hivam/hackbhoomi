"use client";

import participants from "../../participants/participants.json";
import { useState } from "react";

export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const teams = participants.filter((team: any) =>
    team.teamName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
          Participating Teams
        </h1>
        
        <div className="mb-6 relative">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search teams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] placeholder-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="h-5 w-5 text-[hsl(var(--muted-foreground))]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-xl">
          <table className="min-w-full">
            <thead className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">SN</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Team Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Team Leader</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Team Members</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[hsl(var(--border))]">
              {teams.map((team: any) => (
                <tr key={team.sn} className="hover:bg-[hsl(var(--accent))] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{team.sn}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{team.teamName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{team.teamLeader}</td>
                  <td className="px-6 py-4">
                    <ul className="list-none space-y-1">
                      {team.teamMembers.map((member: string, idx: number) => (
                        <li key={idx} className="text-sm text-[hsl(var(--muted-foreground))]">
                          • {member}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
