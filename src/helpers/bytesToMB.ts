import React from 'react'

export const bytesToMB = (bytes: number) => {
    const megabytes = bytes / (1024 * 1024);
    return megabytes;
}
