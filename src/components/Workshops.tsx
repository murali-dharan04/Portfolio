import { BookOpen } from "lucide-react";
import { workshops } from "@/data/portfolioData";

const Workshops = () => {
    return (
        <section id="workshops" className="section-padding">
            <div className="section-container">
                <h2 className="section-title">Workshops & Training</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workshops.map((workshop, index) => (
                        <div key={index} className="card-base group hover:border-primary/50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <BookOpen className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                                        {workshop.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {workshop.institution}
                                    </p>
                                    {workshop.year && (
                                        <span className="inline-block mt-2 text-xs bg-secondary px-2 py-0.5 rounded text-muted-foreground">
                                            {workshop.year}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workshops;
