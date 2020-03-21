import React from 'react';
import FeedEntry from './feedEntry';

export default {
  title: 'Feed/FeedEntry',
  component: FeedEntry
};

export const Default = () => (<FeedEntry author="rvh"
                                        time="2h ago"
                                        thumbnail="https://img.resized.co/dexerto/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5kZXhlcnRvLmNvbVxcXC91cGxvYWRzXFxcLzIwMjBcXFwvMDFcXFwvMjMxMDU0MTZcXFwvbGludXMtdGVjaC10aXBzLXJldGlyaW5nLmpwZ1wiLFwid2lkdGhcIjpcIlwiLFwiaGVpZ2h0XCI6XCJcIixcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cXFwvcHBsdXMuaW1hZ2VzLmRleGVydG8uY29tXFxcL3VwbG9hZHNcXFwvMjAxOVxcXC8xMVxcXC8xMTIxNDk0M1xcXC9wbGFjZWhvbGRlci5qcGdcIn0iLCJoYXNoIjoiZTE3OTY1YTIzM2FjNWYwNWI0Mzk1NjZlOWZmYTU0MzE3YjNiNTJmNSJ9/linus-tech-tips-retiring.jpg"
                                        description="hi guys if have some new tech tips for you"
                                        numberOfQuestions="2"
                                        openQuestions="1"
                                        duration="1:32h"
                                        numberOfTimestamps="45"
                                        course="LTT"
                                        videoPage="https://www.youtube.com/watch?v=1Fprg5crjOI"/>)
