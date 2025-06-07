'use client';

import React, { useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';
import MockInterview from './component/MockInterview'
import ResumeAnalysis from './component/ResumeAnalysis'

export default function Home() {
    const [activeTab, setActiveTab] = useState<'resume' | 'interview'>('resume');
    const [user, setUser] = useState<FirebaseUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleGoogleLogin = async () => {
        try {
            setLoading(true);
            const result = await signInWithPopup(auth, googleProvider);
            console.log('登入成功:', result.user);
        } catch (error) {
            console.error('登入失敗:', error);
            alert('登入失敗，請稍後再試');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log('登出成功');
        } catch (error) {
            console.error('登出失敗:', error);
        }
    };

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            backgroundColor: '#f5f5f5',
            minHeight: '100vh',
            color: '#333',
            position: 'relative',
        }}>
            {/* Google 登入按鈕 - 右上角 */}
            <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                zIndex: 100,
            }}>
                {!user ? (
                    <button
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '12px 20px',
                            backgroundColor: '#ffffff',
                            border: '1px solid #dadce0',
                            borderRadius: '24px',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#3c4043',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            transition: 'all 0.2s ease',
                            opacity: loading ? 0.7 : 1,
                        }}
                        onMouseOver={(e) => {
                            if (!loading) {
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                            }
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        {loading ? '載入中...' : '使用 Google 登入'}
                    </button>
                ) : (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '8px 16px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #dadce0',
                        borderRadius: '24px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}>
                        {user.photoURL ? (
                            <img 
                                src={user.photoURL} 
                                alt="User Avatar"
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                }}
                            />
                        ) : (
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                backgroundColor: '#4285F4',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '14px',
                                fontWeight: 'bold',
                            }}>
                                {user.displayName?.charAt(0) || 'U'}
                            </div>
                        )}
                        <span style={{ fontSize: '14px', color: '#3c4043' }}>
                            {user.displayName || '用戶'}
                        </span>
                        <button
                            onClick={handleLogout}
                            style={{
                                padding: '4px 8px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '12px',
                                color: '#5f6368',
                                borderRadius: '4px',
                            }}
                        >
                            登出
                        </button>
                    </div>
                )}
            </div>

            {/* 左側色塊 */}
            <div style={{
                width: '8cm',
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #4f46e5 0%, #7c3aed 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px 20px',
                color: 'white',
                textAlign: 'center',
                backgroundImage: 'url("/insurance.png")',
                backgroundSize: '60% auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left 200px',
                backgroundBlendMode: 'overlay',
                position: 'relative',
            }} onClick={() => {
                window.open('https://www.104.com.tw/company/12sktyow?jobsource=google', '_blank');
            }}>
                <div style={{
                    position: 'absolute',
                    top: '25%',
                    left: '5%',
                    width: '55%',
                    height: '50%',
                    cursor: 'pointer',
                    zIndex: 10,
                    backgroundColor: 'transparent',
                    borderRadius: '8px',
                }}
                onClick={() => {
                    window.open('https://www.cathay-ins.com.tw/cathayins/personal/', '_blank');
                }}>
                </div>
            </div>

            {/* 中間主要內容區域 */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '60px 40px',
                backgroundColor: '#ffffff',
                minHeight: '100vh',
            }}>
                <h1 style={{ 
                    fontSize: '2.5em', 
                    fontWeight: '300', 
                    color: '#2d3748',
                    marginBottom: '50px', 
                    letterSpacing: '3px',
                    textAlign: 'center',
                }}>履歷診療室🩺💊</h1>

                <div style={{
                    display: 'flex',
                    marginBottom: '50px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '50px',
                    padding: '8px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    border: '1px solid #e2e8f0',
                }}>
                    <button
                        onClick={() => setActiveTab('resume')}
                        style={{
                            padding: '16px 32px',
                            fontSize: '16px',
                            fontWeight: '500',
                            borderRadius: '50px',
                            border: 'none',
                            cursor: 'pointer',
                            background: activeTab === 'resume' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
                            color: activeTab === 'resume' ? '#fff' : '#64748b',
                            transition: 'all 0.3s ease',
                            outline: 'none',
                            letterSpacing: '1px',
                            minWidth: '180px',
                        }}
                    >
                        履歷分析
                    </button>
                    <button
                        onClick={() => setActiveTab('interview')}
                        style={{
                            padding: '16px 32px',
                            fontSize: '16px',
                            fontWeight: '500',
                            borderRadius: '50px',
                            border: 'none',
                            cursor: 'pointer',
                            background: activeTab === 'interview' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
                            color: activeTab === 'interview' ? '#fff' : '#64748b',
                            transition: 'all 0.3s ease',
                            outline: 'none',
                            letterSpacing: '1px',
                            minWidth: '180px',
                        }}
                    >
                        模擬面試
                    </button>
                </div>

                <div style={{
                    width: '100%',
                    maxWidth: '900px',
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    padding: '0',
                    border: '1px solid #f1f5f9',
                    overflow: 'hidden',
                }}>
                    {activeTab === 'resume' && (
                        <ResumeAnalysis />
                    )}
                    {activeTab === 'interview' && (
                        <MockInterview />
                    )}
                </div>
            </div>

            {/* 右側色塊 */}
            <div style={{
                width: '8cm',
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #ef4444 0%, #dc2626 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px 20px',
                color: 'white',
                textAlign: 'center',
                backgroundImage: 'url("/insurance.png")',
                backgroundSize: '60% auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 200px',
                backgroundBlendMode: 'overlay',
                position: 'relative',
            }}>
                <div style={{
                    position: 'absolute',
                    top: '25%',
                    right: '5%',
                    width: '55%',
                    height: '50%',
                    cursor: 'pointer',
                    zIndex: 10,
                    backgroundColor: 'transparent',
                    borderRadius: '8px',
                }}
                onClick={() => {
                    window.open('https://www.cathay-ins.com.tw/cathayins/personal/', '_blank');
                }}>
                </div>
            </div>
        </div>
    );
}
