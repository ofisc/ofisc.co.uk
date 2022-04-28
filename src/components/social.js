import React from 'react';

import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from 'react-share';

export const Social = ({ shareUrl, announcement }) => (
  <div className="flex items-start">

    <TwitterShareButton
      url={shareUrl}
      title={announcement}
      className="">
      <TwitterIcon
        size={32}
        round />
    </TwitterShareButton>

    <div className="pl2">
      <FacebookShareButton
        url={shareUrl}
        quote={announcement}
        className="">
        <FacebookIcon
          size={32}
          round />
      </FacebookShareButton>
    </div>

  </div>
)
