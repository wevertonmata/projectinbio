import { Github, Instagram, Linkedin, Plus, X } from "lucide-react";
import { Button } from "../ui";

export default function UserCard() {
    const icons = [Github, Instagram, Linkedin, Plus, X]
    return (
        <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] text-white rounded-3xl">
            <div className="size-48">
                <img src="/me2.jpg" alt="Profile Picture" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
                        Weverton Mata
                    </h3>
                </div>
                <p className="opacity-40">"Eu faço produtos para a internet"</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <span className="text-xs uppercase font-medium">Links</span>
                <div className="flex gap-3">
                    {icons.map((Icon, index) => (
                        <button key={index} className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]">
                            <Icon />
                        </button>
                    ))}
                </div>
                <div className="flex flex-col gap-3 w-full h-[172px]">
                    <div className="w-full flex flex-col items-center gap-3">
                        <Button className="w-full">Template SaaS - Compre Agora</Button>
                        <button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]">
                            <Plus />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}