import { TechCategory } from '@/types/ui';

/**
 * Definition of the technology categories
 */
export const techCategories: TechCategory[] = [
  {
    title: 'Programming Languages',
    icon: '💻',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-300',
    bgColor: 'bg-blue-500/15',
    items: ['C/C++', 'C#', 'JavaScript', 'Python', 'TypeScript', 'SQL'],
  },
  {
    title: 'Specializations',
    icon: '🎮',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-300',
    bgColor: 'bg-purple-500/15',
    items: ['Cybersecurity', 'Reverse Engineering', 'Game Modding', 'Software Development'],
  },
  {
    title: 'Toolbox',
    icon: '🛠️',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-300',
    bgColor: 'bg-emerald-500/15',
    items: [
      'Visual Studio',
      'VS Code',
      'Git',
      'SourceTrail',
      'IDA Pro',
      'x64dbg',
      'Cheat-Engine',
      'Wireshark',
      'Nmap',
      'Metasploit',
      'Burp Suite',
      'SQLMap',
      'LinPEAS / WinPEAS',
      'pwndbg',
      'GTFOBins',
      'BloodHound',
      'CrackMapExec / NetExec',
      'Mimikatz',
      'Exploit-DB',
      'VirtualBox',
      'Trello',
      'Obsidian',
    ],
  },
];
