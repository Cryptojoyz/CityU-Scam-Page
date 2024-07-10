"use client";
import { useState, useEffect, useRef} from 'react'
import ReactMarkdown from 'react-markdown'
import Loading from '@/components/Loading';

const buttons = [
    { name: 'Trending Scam', id:2 },
    { name: 'Technologies', id:6 },
    { name: 'Media Affordances', id: 1 },
    { name: 'Language Characteristics', id:4 },
    { name: 'Common Appeals', id:3 },
    { name: 'Fight Scams', id: 5 },
    { name: 'Common Vulnerabilities', id: 7 },
    { name: 'Typical Case', id: 8 },
  ]

const toolips = [
    { name: 'Most Popular Scams This Week', id:2 },
    { name: 'How do scammers use different technologies?', id:6 },
    { name: 'How do scammers exploit the affordances of new communication technologies to reach their targets?', id: 1 },
    { name: 'Language Characteristics of Scam Content', id:4 },
    { name: 'Common Appeals Used by Scammers', id:3 },
    { name: 'Measures to Help Citizens Fight Scams', id: 5 },
    { name: 'What are the common vulnerabilities exploited by scammers?', id: 7 },
    { name: 'Typical Case', id: 8 },
  ]

const Menubar = ({ analysisData, typicalcase}) => {
    const [activeButton, setActiveButton] = useState(buttons[0].id);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [tooltipContent, setTooltipContent] = useState('');
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const buttonRefs = useRef({});
    const [isLoading, setIsLoading] = useState(true);

    const extractTitleAndContent = (content) => {
        const sectionTitleMatch = content.match(/^.*$/m);
        let sectionTitle = sectionTitleMatch[0].replace(/[\d\*\.]/g, '').trim();;
        const sectioncontent = content.replace(/^[^\n]*\n(?:\s*\n)*/, '');
        return [sectionTitle, sectioncontent];
    };

    useEffect(() => {
        if (analysisData.length > 0) {
            const selectedContent = activeButton === 8 ? typicalcase : (analysisData[activeButton] || '');
            // console.log("这是提取的内容",selectedContent);
            if (activeButton === 8) {
                setTitle('');
                setContent(selectedContent);
            } else {
                const [sectionTitle, sectioncontent] = extractTitleAndContent(selectedContent);
                setTitle(sectionTitle);
                setContent(sectioncontent);
            }
            setIsLoading(false);
        }
    }, [analysisData, activeButton, typicalcase]);

    const handleMouseEnter = (id, event) => {
        const tooltip = toolips.find(t => t.id === id);
        setTooltipContent(tooltip ? tooltip.name : '');
        const rect = buttonRefs.current[id].getBoundingClientRect();
        setTooltipPosition({
            top: rect.top - 40, // Adjust this value to control the vertical position
            left: rect.left + rect.width / 2, // Adjust this value to control the horizontal position
        });
    };

    const handleMouseLeave = () => {
        setTooltipContent('');
        setTooltipPosition({ top: 0, left: 0 });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="flex flex-col justify-center pt-8">
            <div className="flex justify-center relative">
                <span className="inline-flex shadow-sm overflow-x-auto">
                    {buttons.map((button,index) => {
                        const isFirst = index === 0;
                        const isLast = index === buttons.length - 1;
                        return (
                        
                            <button
                                key={button.id}
                                className={`inline-flex items-center px-5 py-3 text-sm font-semibold hover:bg-gray-100 focus:z-10 ${
                                    activeButton === button.id ? 'bg-gray-100 text-black' : ' bg-gray-300 text-gray-900'
                                } ${isFirst ? 'rounded-l-md' : ''} ${
                                    isLast ? 'rounded-r-md' : ''
                                } ${!isFirst && 'border-l-0'}`}
                                type="button"
                                ref={el => (buttonRefs.current[button.id] = el)}
                                onClick={() => setActiveButton(button.id)}
                                onMouseEnter={(e) => handleMouseEnter(button.id, e)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {button.name}
                            </button>
                        
                        );
                    })}
                    {tooltipContent && (
                        <div
                            className="fixed bg-gray-200 text-gray-900 rounded shadow-lg px-4 py-2 hidden lg:block whitespace-nowrap"
                            style={{ top: tooltipPosition.top, left: tooltipPosition.left, transform: 'translateX(-50%)'}}
                        >
                            {tooltipContent}
                        </div>)
                    }
                </span>
            </div>

            <div className="flex pt-8 justify-center flex-col items-center">
                    {title && <strong className='text-4xl text-center mb-8 max-w-5xl'>{title}</strong>}
                <div className='prose prose-h1:text-center justify-center'>
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </div>
        </div>
  )
}


export default Menubar