import { JournalEntry } from '@/data/journal';
export function readTime(entry: JournalEntry) { return Math.max(1, Math.ceil(entry.content.trim().split(/\s+/).length / 200)); }
