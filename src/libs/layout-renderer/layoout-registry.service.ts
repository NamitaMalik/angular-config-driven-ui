import { Injectable, signal, Type, computed } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LayoutRegistryService {
  private registry = signal(new Map<string, Type<any>>());

  register(type: string, component: Type<any>) {
    const map = new Map(this.registry());
    map.set(type, component);
    this.registry.set(map);
  }

  resolve(type: string): Type<any> | undefined {
    return this.registry().get(type);
  }

  components = computed(() => this.registry());
}
