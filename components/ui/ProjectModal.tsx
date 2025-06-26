import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import ReactMarkdown from 'react-markdown';
import { Mail } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  title: string;
  link: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, content, title, link }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="px-6 flex justify-center items-start">

            <a href={link} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center h-12 gap-3 px-4 rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-filter backdrop-blur-lg hover:bg-opacity-100 transition-all">
              <img src="/git.svg" alt="GitHub" width={20} height={20} />
              <p>View on GitHub</p>
            </a>

        </DialogHeader>
        <div className="prose prose-invert max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: content }} 
            className="[&_a]:text-blue-400 [&_a]:underline [&_a]:hover:text-blue-300 [&_a]:transition-colors [&_a]:cursor-pointer"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal; 