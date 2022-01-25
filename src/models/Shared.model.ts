import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type DashboardRow = {
    label: string;
    subLabel: string;
    url?: string;
    count?: number;
}

export type  NavItem = {
    icon: IconDefinition;
    label: string;
    url: string;
}

export type  GroupCount = {
    id: string|number;
    _count: number;
}
