// Core Styles
import './styles/tokens.css'
import { THEME_DEFAULT, THEME_SAPPHIRE, THEME_EMERALD, THEME_CYBER } from './styles/themes'

// Theme Controller
import './components/theme/CamelotTheme'

// Buttons
import './components/button/filled/CamelotButton'
import './components/button/icon/CamelotIconButton'
import './components/button/outline/CamelotOutlineButton'
import './components/button/text/CamelotTextButton'

// Inputs & Selections
import './components/input/CamelotInput'
import './components/checkbox/CamelotCheckbox'
import './components/checkbox/CamelotCheckboxGroup'
import './components/switch/CamelotSwitch'
import './components/radio/CamelotRadio'
import './components/radio/CamelotRadioGroup'
import './components/select/CamelotSelect'

// Layout & UI
import './components/tabs/CamelotTabs'
import './components/card/CamelotCard'
import './components/badge/CamelotBadge'
import './components/dialog/CamelotConfirmDialog'
import './components/drawer/CamelotDrawer'
import './components/menu/CamelotMenu'
import './components/expand/CamelotExpand'
import './components/scifi/CamelotScifiReticle'

/**
 * Global Showcase Initialization
 */
document.addEventListener('DOMContentLoaded', () => {
    const rootTheme = document.getElementById('root-theme') as any;
    const themeSelector = document.getElementById('theme-selector') as HTMLSelectElement;
    const paletteSelector = document.getElementById('palette-selector') as HTMLSelectElement;

    if (!rootTheme) return;

    // 1. Initialize Options (Selects, Tabs, Menus)
    const initComponentOptions = () => {
        // Selects
        const demoSelects = document.querySelectorAll('.demo-select') as any;
        const standardOptions = [
            { label: 'Standard Option', value: 'opt1' },
            { label: 'Extended Choice', value: 'opt2' },
            { label: 'Material Logic', value: 'opt3' }
        ];
        demoSelects.forEach((select: any) => { select.options = standardOptions; });

        // Tabs
        const tabItems = [
            { label: 'Overview', value: 'tab1' },
            { label: 'Features', value: 'tab2' },
            { label: 'Settings', value: 'tab3' }
        ];
        const demoTabs = document.querySelectorAll('.demo-tabs') as any;
        demoTabs.forEach((tabs: any) => { tabs.items = tabItems; });

        // Menus
        const menuOptions = [
            { label: 'Dashboard', key: 'dash', icon: '📊' },
            {
                label: 'Enterprise',
                key: 'ent',
                icon: '🏢',
                children: [
                    {
                        label: 'Human Resources',
                        key: 'hr',
                        children: [
                            {
                                label: 'Employees',
                                key: 'emp',
                                children: [
                                    { label: 'Full-time', key: 'ft' },
                                    { label: 'Contractors', key: 'cont' },
                                    { label: 'Interns', key: 'int' }
                                ]
                            },
                            { label: 'Payroll', key: 'pay' }
                        ]
                    },
                    { label: 'Marketing', key: 'mkt' }
                ]
            },
            { label: 'Control Center', key: 'ctrl', icon: '🕹️' },
            { label: 'Settings', key: 'sett', icon: '⚙️' }
        ];

        const menuIds = ['menu-m', 'menu-s', 'menu-sci', 'menu-h-m', 'menu-col-m', 'menu-col-s', 'menu-col-sci'];
        menuIds.forEach(id => {
            const menu = document.getElementById(id) as any;
            if (menu) {
                menu.options = menuOptions;
                menu.addEventListener('select', (e: any) => {
                    const display = document.getElementById(`val-${id}`);
                    if (display) display.textContent = e.detail;
                });
            }
        });
    };

    // 2. Control Panel Logic
    if (themeSelector) {
        themeSelector.addEventListener('change', (e: any) => {
            rootTheme.setAttribute('mode', e.target.value);
        });
    }

    if (paletteSelector) {
        paletteSelector.addEventListener('change', (e: any) => {
            const val = e.target.value;
            switch(val) {
                case 'sapphire': rootTheme.config = THEME_SAPPHIRE; break;
                case 'emerald': rootTheme.config = THEME_EMERALD; break;
                case 'cyber': rootTheme.config = THEME_CYBER; break;
                default: rootTheme.config = THEME_DEFAULT; break;
            }
        });
    }

    // 3. Setup Groups (Radio, Checkbox)
    const setupGroup = (groupId: string, displayId: string) => {
        const group = document.getElementById(groupId) as any;
        const display = document.getElementById(displayId);
        if (group && display) {
            group.addEventListener('change', (e: any) => {
                const val = e.detail.value;
                display.textContent = Array.isArray(val) ? val.join(', ') : val;
            });
        }
    };

    const groups = [
        ['radio-group-m', 'val-radio-m'],
        ['cb-group-m', 'val-cb-m'],
        ['radio-group-c', 'val-radio-c'],
        ['cb-group-c', 'val-cb-c'],
        ['radio-group-s', 'val-radio-s'],
        ['cb-group-s', 'val-cb-s'],
        ['radio-group-sci-form', 'val-radio-sci-form'],
        ['cb-group-sci-form', 'val-cb-sci-form']
    ];
    groups.forEach(([gid, did]) => setupGroup(gid, did));

    // 4. Dialog Setup
    const dlgActionDisplay = document.getElementById('dlg-action');
    const setupDialog = (id: string) => {
        const dlg = document.getElementById(id) as any;
        if (!dlg) return;
        dlg.addEventListener('confirm', () => {
            if (dlgActionDisplay) {
                dlgActionDisplay.textContent = `[${id}] Confirmed`;
                dlgActionDisplay.style.color = 'var(--cml-color-success)';
            }
        });
        dlg.addEventListener('cancel', () => {
            if (dlgActionDisplay) {
                dlgActionDisplay.textContent = `[${id}] Cancelled`;
                dlgActionDisplay.style.color = 'var(--cml-color-error)';
            }
        });
    };
    ['dlg-m', 'dlg-c', 'dlg-s', 'scifi-dialog'].forEach(id => setupDialog(id));

    // 5. Sci-fi Specialty Init
    const initScifiSpecialty = () => {
        const scifiSelect = document.getElementById('scifi-select-levels') as any;
        if (scifiSelect) {
            scifiSelect.options = [
                {label: 'LEVEL_01 (GUEST)', value: '01'},
                {label: 'LEVEL_05 (ADMIN)', value: '05'},
                {label: 'LEVEL_09 (ROOT)', value: '09'}
            ];
        }

        const scifiTabs = document.getElementById('scifi-tabs-main') as any;
        if (scifiTabs) {
            scifiTabs.items = [
                {label: 'COMM_LOG', value: '1'},
                {label: 'NAV_DATA', value: '2'},
                {label: 'SYS_INFO', value: '3'}
            ];
        }

        const scifiTermBtn = document.getElementById('scifi-btn-terminate');
        const scifiDialog = document.getElementById('scifi-dialog') as any;
        if (scifiTermBtn && scifiDialog) {
            scifiTermBtn.addEventListener('click', () => {
                scifiDialog.open = true;
            });
        }
    };

    // Run all Initializations
    initComponentOptions();
    initScifiSpecialty();
    
    // Global Helpers
    (window as any).toggleAllCollapses = () => {
        const cols = ['menu-col-m', 'menu-col-s', 'menu-col-sci'];
        cols.forEach(id => {
            const menu = document.getElementById(id) as any;
            if (menu) {
                menu.collapsed = !menu.collapsed;
                menu.style.width = menu.collapsed ? '80px' : '240px';
            }
        });
    };

    (window as any).setCustomAesthetics = () => {
        rootTheme.config = {
            ...rootTheme.config,
            font: { family: "'Georgia', serif", 'size-headline': '2.5rem' },
            spacing: { '4': '2rem' }
        };
    };

    (window as any).setCustomColor = (color: string) => {
        rootTheme.config = { ...rootTheme.config, color: { primary: color } };
    };

    // Default Config
    rootTheme.config = THEME_DEFAULT;
});
