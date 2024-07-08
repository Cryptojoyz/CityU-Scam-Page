"use client";
import { useState, useEffect, useRef} from 'react'
import ReactMarkdown from 'react-markdown'

const buttons = [
    { name: '流行诈骗', id:2 },
    { name: '诈骗技术类别', id:6 },
    { name: '媒体技术便利', id: 1 },
    { name: '语言特点', id:4 },
    { name: '劝服手段', id:3 },
    { name: '诈骗防范', id: 5 },
    { name: '典型案例', id: 7 },
  ]

const toolips = [
    { name: '本周最流行的诈骗', id:2 },
    { name: '骗子如何利用不同技术？', id:6 },
    { name: '骗子如何利用新通信技术的便利来接触目标？', id: 1 },
    { name: '诈骗内容的语言特点', id:4 },
    { name: '骗子常用的诱骗方法', id:3 },
    { name: '帮助市民对抗诈骗的措施', id: 5 },
    { name: '典型案例', id: 7 },
  ]

const Menubarzh = ({ analysisData, typicalcase}) => {
    const [activeButton, setActiveButton] = useState(buttons[0].id);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [tooltipContent, setTooltipContent] = useState('');
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const buttonRefs = useRef({})

    const extractTitleAndContent = (content) => {
        const sectionTitleMatch = content.match(/^.*$/m);
        let sectionTitle = sectionTitleMatch[0].replace(/[\d\*\.]/g, '').trim();;
        const sectioncontent = content.replace(/^[^\n]*\n(?:\s*\n)*/, '');
        return [sectionTitle, sectioncontent];
    };

    useEffect(() => {
        if (analysisData.length > 0) {
            const selectedContent = activeButton === 7 ? typicalcase : (analysisData[activeButton] || '');
            console.log("这是提取的内容",selectedContent);
            if (activeButton === 7) {
                setTitle('');
                setContent(selectedContent);
            } else {
                const [sectionTitle, sectioncontent] = extractTitleAndContent(selectedContent);
                setTitle(sectionTitle);
                setContent(sectioncontent);
            }
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
                            className="fixed bg-gray-200 text-gray-900 rounded shadow-lg px-4 py-2 hidden lg:block"
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


export default Menubarzh