import { useState } from 'react';
import type { MouseEvent } from 'react';
import { FaMapPin, FaPlane, FaUser, FaUsers, FaNewspaper } from 'react-icons/fa6';
import { FaMoneyBillWave } from 'react-icons/fa6';
import { MdOutlineNavigateNext, MdNavigateBefore } from 'react-icons/md';
import './TravelBooking.css';
import { FaGlobeEurope } from "react-icons/fa";
interface TravelBookingProps {
    onSubmit: (data: TravelData) => void;
}

export interface TravelData {
    destination: string;
    tourType: 'solo' | 'duo' | 'group';
    numberOfPeople: number;
    date: string;
}

const destinations = [
    { country: 'United States', city: 'New York' },
    { country: 'United States', city: 'Los Angeles' },
    { country: 'United States', city: 'Chicago' },
    { country: 'France', city: 'Paris' },
    { country: 'France', city: 'Nice' },
    { country: 'Italy', city: 'Rome' },
    { country: 'Italy', city: 'Venice' },
    { country: 'Japan', city: 'Tokyo' },
    { country: 'Japan', city: 'Kyoto' },
    { country: 'Thailand', city: 'Bangkok' },
    { country: 'Thailand', city: 'Phuket' },
    { country: 'Spain', city: 'Barcelona' },
    { country: 'Spain', city: 'Madrid' },
    { country: 'Germany', city: 'Berlin' },
    { country: 'Netherlands', city: 'Amsterdam' },
    { country: 'Turkey', city: 'Istanbul' },
    { country: 'Egypt', city: 'Cairo' },
    { country: 'Switzerland', city: 'Zurich' },
    { country: 'Austria', city: 'Vienna' },
    { country: 'Greece', city: 'Athens' },
];

export default function TravelBooking({ onSubmit }: TravelBookingProps) {
    const [selectedDestination, setSelectedDestination] = useState('');
    const [tourType, setTourType] = useState<'solo' | 'duo' | 'group'>('solo');
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [moneyInserted, setMoneyInserted] = useState(false);
    const [step, setStep] = useState(1);

    const handleDestinationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDestination(e.target.value);
    };

    const handleTourTypeChange = (type: 'solo' | 'duo' | 'group') => {
        setTourType(type);
        if (type === 'solo') setNumberOfPeople(1);
        else if (type === 'duo') setNumberOfPeople(2);
    };

    const handleNumberChange = (value: number) => {
        setNumberOfPeople(Math.max(1, Math.min(value, 20)));
    };

    const checkHardwareForMoney = async (): Promise<boolean> => {
        // Placeholder for actual hardware integration.
        // Replace with real device check when available.
        return Promise.resolve(false);
    };

    const handleSubmit = (arg?: boolean | MouseEvent<HTMLButtonElement>) => {
        const overrideMoneyInserted = typeof arg === 'boolean' ? arg : false;
        const paid = moneyInserted || overrideMoneyInserted;
        if (!selectedDestination || !paid) {
            alert('Please select a destination and insert money');
            return;
        }

        const travelData: TravelData = {
            destination: selectedDestination,
            tourType,
            numberOfPeople,
            date: ''
        };

        // Log to console
        console.log('Travel Booking Data:', travelData);
        console.log('From: Uzbekistan');
        console.log('Tour Type:', tourType.toUpperCase());
        console.log('Travelers:', numberOfPeople);
        console.log('Payment status:', paid ? 'PAID' : 'UNPAID');

        onSubmit(travelData);
    };

    const simulateInsertAndProceed = () => {
        setMoneyInserted(true);
        handleSubmit(true);
    };

    return (
        <div className="vintage-container">
            <div className="newspaper-background">
                <div className="paper-texture"></div>
            </div>

            <div className="vintage-card">
                {/* Vintage Header */}
                <div className="vintage-header">
                    <div className="newspaper-masthead">
                        <div className="masthead-decoration left"></div>
                        <div className="masthead-content">
                            <h1 className="newspaper-title">TRAVEL GAZETTE</h1>
                            <p className="newspaper-subtitle">Global Adventure & Bookings</p>
                            <p className="newspaper-date">Est. 1895</p>
                        </div>
                        <div className="masthead-decoration right"></div>
                    </div>
                    <div className="dividing-line"></div>
                </div>

                {/* Step Indicator - Vintage Style */}
                <div className="vintage-steps">
                    <div className={`vintage-step ${step >= 1 ? 'active' : ''}`}>
                        <div className="step-circle">1</div>
                        <p>To where?</p>
                    </div>
                    <div className="step-connector"></div>
                    <div className={`vintage-step ${step >= 2 ? 'active' : ''}`}>
                        <div className="step-circle">2</div>
                        <p>Travel Style</p>
                    </div>
                    <div className="step-connector"></div>
                    <div className={`vintage-step ${step >= 3 ? 'active' : ''}`}>
                        <div className="step-circle">3</div>
                        <p>Payment</p>
                    </div>
                </div>

                <div className="article-divider"></div>

                {/* Form Content */}
                <div className="booking-content">
                    {step === 1 && (
                        <div className="step-content vintage-fade-in">
                            <div className="section-header">
                                <FaMapPin className="section-icon" />
                                <h2>WHERE DO YOU WANT TO FLY?</h2>
                            </div>
                            <p className="section-description">Choose your final destination from our extensive list of worldwide locations.</p>

                            <select
                                value={selectedDestination}
                                onChange={handleDestinationChange}
                                className="vintage-select"
                            >
                                <option value="">-- Select a destination --</option>
                                {destinations.map((dest) => (
                                    <option key={`${dest.country}-${dest.city}`} value={`${dest.city}, ${dest.country}`}>
                                        {dest.city}, {dest.country}
                                    </option>
                                ))}
                            </select>

                            {selectedDestination && (
                                <div className="vintage-preview">
                                    <FaGlobeEurope className="preview-icon" />
                                    <span>{selectedDestination}</span>
                                </div>
                            )}
                        </div>
                    )}

                    {step === 2 && (
                        <div className="step-content vintage-fade-in">
                            <div className="section-header">
                                <FaPlane className="section-icon" />
                                <h2>CHOOSE YOUR TRAVEL COMPANION</h2>
                            </div>
                            <p className="section-description">Decide whether you prefer to travel alone, with a friend, or with a larger group.</p>

                            <div className="tour-types-vintage">
                                <button
                                    className={`tour-option-vintage ${tourType === 'solo' ? 'selected' : ''}`}
                                    onClick={() => handleTourTypeChange('solo')}
                                >
                                    <FaUser className="tour-icon" />
                                    <div className="tour-name">SOLO</div>
                                    <div className="tour-description">1 Adventurer</div>
                                </button>
                                <button
                                    className={`tour-option-vintage ${tourType === 'duo' ? 'selected' : ''}`}
                                    onClick={() => handleTourTypeChange('duo')}
                                >
                                    <FaUsers className="tour-icon" />
                                    <div className="tour-name">DUO</div>
                                    <div className="tour-description">2 Explorers</div>
                                </button>
                                <button
                                    className={`tour-option-vintage ${tourType === 'group' ? 'selected' : ''}`}
                                    onClick={() => handleTourTypeChange('group')}
                                >
                                    <FaUsers className="tour-icon" />
                                    <div className="tour-name">GROUP</div>
                                    <div className="tour-description">3+ Travelers</div>
                                </button>
                            </div>

                            {tourType === 'group' && (
                                <div className="group-vintage-selector">
                                    <label>NUMBER OF TRAVELERS</label>
                                    <div className="number-input-vintage">
                                        <button onClick={() => handleNumberChange(numberOfPeople - 1)} className="vintage-btn-minus">−</button>
                                        <input
                                            type="number"
                                            value={numberOfPeople}
                                            onChange={(e) => handleNumberChange(parseInt(e.target.value) || 1)}
                                            min="3"
                                            max="20"
                                            className="vintage-number-input"
                                        />
                                        <button onClick={() => handleNumberChange(numberOfPeople + 1)} className="vintage-btn-plus">+</button>
                                    </div>
                                    <p className="traveler-count-vintage">{numberOfPeople} travelers in your party</p>
                                </div>
                            )}
                        </div>
                    )}

                    {step === 3 && (
                        <div className="step-content vintage-fade-in">
                            <div className="section-header">
                                <FaMoneyBillWave className="section-icon" />
                                <h2>INSERT MONEY</h2>
                            </div>
                            <p className="section-description">Please insert money into the machine to proceed.</p>

                            <div className="vintage-payment-controls vintage_buttons">
                                <button className="vintage-btn-insert" onClick={simulateInsertAndProceed}>I INSERTED</button>
                                <button
                                    className="vintage-btn-check"
                                    onClick={async () => {
                                        const ok = await checkHardwareForMoney();
                                        if (ok) {
                                            setMoneyInserted(true);
                                            handleSubmit(true);
                                        } else {
                                            alert('No money detected by hardware. Use "I INSERTED" to simulate.');
                                        }
                                    }}
                                >
                                    CHECK HARDWARE
                                </button>
                            </div>

                            {moneyInserted && (
                                <div className="vintage-preview date-preview">
                                    <FaMoneyBillWave className="preview-icon" />
                                    <span>Payment received</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="article-divider"></div>

                {/* Vintage Summary Box */}
                <div className="vintage-summary-box">
                    <div className="summary-label">BOOKING SUMMARY</div>
                    <div className="summary-content">
                        <div className="summary-row">
                            <span className="label">FROM:</span>
                            <span className="value">Uzbekistan</span>
                        </div>
                        {selectedDestination && (
                            <div className="summary-row">
                                <span className="label">TO:</span>
                                <span className="value">{selectedDestination}</span>
                            </div>
                        )}
                        <div className="summary-row">
                            <span className="label">TRIP TYPE:</span>
                            <span className="value">{tourType.toUpperCase()} ({numberOfPeople} {numberOfPeople === 1 ? 'traveler' : 'travelers'})</span>
                        </div>

                    </div>
                </div>

                {/* Navigation */}
                <div className="vintage-navigation">
                    {step > 1 && (
                        <button className="vintage-btn-nav vintage-btn-back" onClick={() => setStep(step - 1)}>
                            <MdNavigateBefore /> PREVIOUS
                        </button>
                    )}
                    {step < 3 ? (
                        <button
                            className="vintage-btn-nav vintage-btn-next"
                            onClick={() => {
                                if (step === 1 && !selectedDestination) {
                                    alert('Please select a destination');
                                    return;
                                }
                                setStep(step + 1);
                            }}
                        >
                            NEXT <MdOutlineNavigateNext />
                        </button>
                    ) : (
                        <button
                            className="vintage-btn-nav vintage-btn-submit"
                            onClick={handleSubmit}
                        >
                            <FaNewspaper /> READ THE NEWS
                        </button>
                    )}
                </div>
            </div>

        </div>
    );
}
