import { EventType } from "@/types/event.type";
import { create } from "zustand";

interface EventStore {
  selectedType: string;
  selectedCategory: string;
  setSelectedType: (type: string) => void;
  setSelectedCategory: (category: string) => void;
  filterEvents: (events: EventType[]) => EventType[];
}

export const useEventStore = create<EventStore>((set, get) => ({
  selectedType: "All",
  selectedCategory: "All",
  setSelectedType: (type) => set({ selectedType: type }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  filterEvents: (events) => {
    const { selectedType, selectedCategory } = get();
    return events.filter((event) => {
      const typeMatch =
        selectedType === "All" || event.category.name === selectedType;
      const categoryMatch =
        selectedCategory === "All" || event.category.name === selectedCategory;
      return typeMatch && categoryMatch;
    });
  },
}));
