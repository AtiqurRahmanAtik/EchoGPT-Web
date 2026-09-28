export interface ExtensionHistoryItem {
  id: string;
  title: string;
  preview: string;
  createdAt: string;
}

export interface ExtensionModel {
  id: string;
  name: string;
  description: string;
}

export interface QuickAction {
  id: string;
  label: string;
  prompt: string;
}