import React from 'react'
import CampaignStatusButton from './CampaignStatusButton';

export default {
    title : 'Button/Capmpaign Status Buttons',
    component: CampaignStatusButton
}


export const Active = () => {
    return (
        <CampaignStatusButton variant='actives'>Active</CampaignStatusButton>
    )
}
export const Approved = () => {
    return (
        <CampaignStatusButton variant='approved'>Approved</CampaignStatusButton>
    )
}
export const Draft = () => {
    return (
        <CampaignStatusButton variant='draft'>Draft</CampaignStatusButton>
    )
}
export const Inreview = () => {
    return (
        <CampaignStatusButton variant='in-review'>In Review</CampaignStatusButton>
    )
}
export const AssetsNeeded = () => {
    return (
        <CampaignStatusButton variant='assets-needed'>Assets Needed</CampaignStatusButton>
    )
}
export const Declined = () => {
    return (
        <CampaignStatusButton variant='declined'>Declined</CampaignStatusButton>
    )
}
export const AssetDeclined = () => {
    return (
        <CampaignStatusButton variant='asset-declined'>Asset Declined</CampaignStatusButton>
    )
}
export const Finished = () => {
    return (
        <CampaignStatusButton variant='finished'>Finished</CampaignStatusButton>
    )
}