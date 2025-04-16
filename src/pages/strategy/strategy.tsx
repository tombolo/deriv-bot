import { useState } from 'react';
import './strategy.css';

const Trade = () => {
    const [activeStrategy, setActiveStrategy] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const strategies = {
        overUnder: {
            title: "Over/Under",
            description: "Predict if price will finish above or below target",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"></path>
                    <path d="M18 7V3"></path>
                    <path d="M15 15l3-3 3 3"></path>
                    <path d="M18 21v-4"></path>
                    <path d="M9 9l3-3 3 3"></path>
                    <path d="M12 21v-4"></path>
                </svg>
            ),
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            accentColor: "#4facfe",
            bgPattern: "diagonal-lines",
            tips: [
                // ... (your tips content)
            ]
        },
        evenOdd: {
            title: "Even/Odd",
            description: "Forecast whether the final digit will be even or odd",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3v4"></path>
                    <path d="M16 3v4"></path>
                    <path d="M3 10h18"></path>
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="M9 16l2 2 4-4"></path>
                </svg>
            ),
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            accentColor: "#f5576c",
            bgPattern: "polka-dots",
            tips: [
                <div className="tip-content">
                    <div className="warning-banner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <span>Requires automated tools - Not for manual trading!</span>
                    </div>

                    <div className="tip-section">
                        <h4>Requirements</h4>
                        <ul className="diamond-list">
                            <li>Use 1 tick duration</li>
                            <li>Apply volatility: 100/75/50 with 1s intervals</li>
                            <li>Utilize rapid execution tools</li>
                        </ul>
                    </div>

                    <div className="tip-section">
                        <h4>Trading Even</h4>
                        <ul className="checkmark-list">
                            <li>Green bar at EVEN digit (12.5%+)</li>
                            <li>Three EVEN digits above 10.5%</li>
                            <li>Red bar on EVEN digit below 9.5%</li>
                        </ul>
                        <div className="entry-point">
                            <span>ENTRY:</span> Wait for cursor to hit TWO ODD digits then GREEN BAR
                        </div>
                    </div>

                    <div className="tip-section">
                        <h4>Trading Odd</h4>
                        <ul className="checkmark-list">
                            <li>Green bar at ODD digit (12.5%+)</li>
                            <li>Three ODD digits above 10.5%</li>
                            <li>Red bar on ODD digit below 9.5%</li>
                        </ul>
                        <div className="entry-point">
                            <span>ENTRY:</span> Wait for cursor to hit TWO EVEN digits then GREEN BAR
                        </div>
                    </div>

                    <div className="pro-tip">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                        </svg>
                        <div>
                            <strong>PRO TIP:</strong> Patience is key! Never rush the market - wait for perfect conditions
                        </div>
                    </div>
                </div>
            ]
        },
        trendRider: {
            title: "Trend Rider",
            description: "Capitalize on sustained market movements",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            ),
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            accentColor: "#43e97b",
            bgPattern: "waves",
            tips: [
                // ... (your tips content)
            ]
        },
        breakout: {
            title: "Breakout",
            description: "Trade price movements beyond key levels",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18"></path>
                    <path d="M6 6l12 12"></path>
                </svg>
            ),
            gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
            accentColor: "#ff9a9e",
            bgPattern: "grid",
            tips: [
                // ... (your tips content)
            ]
        },
        scalping: {
            title: "Scalping",
            description: "Quick trades capturing small price movements",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
            ),
            gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
            accentColor: "#a18cd1",
            bgPattern: "hexagons",
            tips: [
                // ... (your tips content)
            ]
        }
    };

    const handleBackClick = () => {
        setActiveStrategy(null);
    };

    return (
        <div className="trade-container">
            {!activeStrategy ? (
                <div className="strategies-container">
                    <div className="background-elements">
                        <div className="bg-circle blue"></div>
                        <div className="bg-circle pink"></div>
                        <div className="bg-circle green"></div>
                    </div>

                    <h1 className="strategies-title">
                        Advanced Trading Strategies
                    </h1>

                    <p className="strategies-subtitle">
                        Select a trading strategy to view detailed execution guidelines
                    </p>

                    <div className="strategy-cards-container">
                        {Object.entries(strategies).map(([key, strategy]) => (
                            <div
                                key={key}
                                onClick={() => setActiveStrategy(key)}
                                onMouseEnter={() => setHoveredCard(key)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className={`strategy-card ${strategy.bgPattern} ${hoveredCard === key ? 'hovered' : ''}`}
                                style={{ '--accent-color': strategy.accentColor }}
                            >
                                <div className="card-glow" style={{ background: strategy.gradient }}></div>
                                <div className="card-content">
                                    <div className="card-icon" style={{ background: strategy.gradient }}>
                                        {strategy.icon}
                                    </div>
                                    <h3>{strategy.title}</h3>
                                    <p>{strategy.description}</p>
                                    <button className="explore-button">
                                        <span>Explore Strategy</span>
                                        <div className="arrow-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h13M12 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="strategy-detail-container" style={{ '--gradient': strategies[activeStrategy].gradient }}>
                    <button className="back-button" onClick={handleBackClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Strategies
                    </button>

                    <div className="strategy-detail-content">
                        <div className="strategy-header">
                            <div className="strategy-icon" style={{ background: strategies[activeStrategy].gradient }}>
                                {strategies[activeStrategy].icon}
                            </div>
                            <h2>{strategies[activeStrategy].title}</h2>
                            <p>{strategies[activeStrategy].description}</p>
                        </div>

                        <div className="strategy-tips">
                            <h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                </svg>
                                Execution Guidelines
                            </h3>
                            <div className="tips-grid">
                                {strategies[activeStrategy].tips.map((tip, index) => (
                                    <div key={index} className="tip-card">
                                        <div className="tip-number">{index + 1}</div>
                                        <div className="tip-content">{tip}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Trade;