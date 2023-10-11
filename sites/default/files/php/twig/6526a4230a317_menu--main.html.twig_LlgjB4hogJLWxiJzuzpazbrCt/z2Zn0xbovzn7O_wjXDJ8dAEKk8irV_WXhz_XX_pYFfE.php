<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/oshop/templates/menu--main.html.twig */
class __TwigTemplate_0f9a688d2fad85a93303a9d7c380fcfd extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 23
        $macros["menus"] = $this->macros["menus"] = $this;
        // line 28
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [($context["items"] ?? null), ($context["attributes"] ?? null), 0], 28, $context, $this->getSourceContext()));
        echo "

";
    }

    // line 30
    public function macro_menu_links($__items__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "items" => $__items__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start();
        try {
            // line 31
            echo "  ";
            $macros["menus"] = $this;
            // line 32
            echo "  ";
            if (($context["items"] ?? null)) {
                // line 33
                echo "
    ";
                // line 34
                if ((($context["menu_level"] ?? null) == 1)) {
                    // line 35
                    echo "      <ul class=\"dropdown-menu\">
    ";
                } elseif ((                // line 36
($context["menu_level"] ?? null) == 2)) {
                    // line 37
                    echo "      <ul class=\"dropdown-menu\">
    ";
                } elseif ((                // line 38
($context["menu_level"] ?? null) > 0)) {
                    // line 39
                    echo "      <ul>
    ";
                }
                // line 41
                echo "    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                $context['loop'] = [
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                ];
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 42
                    echo "      ";
                    // line 43
                    $context["classes"] = [0 => ((twig_get_attribute($this->env, $this->source,                     // line 44
$context["item"], "is_expanded", [], "any", false, false, true, 44)) ? ("dropdown") : ("")), 1 => ((twig_get_attribute($this->env, $this->source,                     // line 45
$context["item"], "is_collapsed", [], "any", false, false, true, 45)) ? ("dropdown1") : ("")), 2 => ((twig_get_attribute($this->env, $this->source,                     // line 46
$context["item"], "in_active_trail", [], "any", false, false, true, 46)) ? ("active") : ("")), 3 => (((                    // line 47
($context["menu_level"] ?? null) == 0)) ? ("nav-item") : (""))];
                    // line 51
                    echo "      <li";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 51), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 51), 51, $this->source), "html", null, true);
                    echo ">
          ";
                    // line 52
                    if ((($context["menu_level"] ?? null) == 0)) {
                        // line 53
                        echo "              <a href=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 53), 53, $this->source), "html", null, true);
                        echo "\" class=\"nav-link dropdown-toggle\" ><span class=\"menu-label\">";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 53), 53, $this->source));
                        echo "</span></a>  
              ";
                        // line 54
                        if ((twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 54) && twig_get_attribute($this->env, $this->source, $context["loop"], "last", [], "any", false, false, true, 54))) {
                            // line 55
                            echo "                ";
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_replace_filter($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 55), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1)], 55, $context, $this->getSourceContext())), ["dm-align-2" => "right"]));
                            echo "
             
              ";
                        } elseif (twig_get_attribute($this->env, $this->source,                         // line 57
$context["item"], "below", [], "any", false, false, true, 57)) {
                            // line 58
                            echo "              ";
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 58), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1)], 58, $context, $this->getSourceContext()));
                            echo "
              ";
                        }
                        // line 60
                        echo "          ";
                    } elseif ((($context["menu_level"] ?? null) == 1)) {
                        // line 61
                        echo "              <a href=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 61), 61, $this->source), "html", null, true);
                        echo "\"  class=\"dropdown-item\">";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 61), 61, $this->source));
                        echo "</a>
              ";
                        // line 62
                        if (twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 62)) {
                            // line 63
                            echo "               <span class=\"arrow\"></span>
                ";
                            // line 64
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 64), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1)], 64, $context, $this->getSourceContext()));
                            echo "
              ";
                        }
                        // line 65
                        echo "  
          ";
                    } elseif ((                    // line 66
($context["menu_level"] ?? null) == 2)) {
                        // line 67
                        echo "              <a href=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 67), 67, $this->source), "html", null, true);
                        echo "\"  class=\"dropdown-item\">";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 67), 67, $this->source));
                        echo "</a>
              ";
                        // line 68
                        if (twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 68)) {
                            // line 69
                            echo "               { <span class=\"arrow\"></span>
                ";
                            // line 70
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 70), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1)], 70, $context, $this->getSourceContext()));
                            echo "
              ";
                        }
                        // line 71
                        echo "  
          ";
                    } else {
                        // line 73
                        echo "              <a href=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 73), 73, $this->source), "html", null, true);
                        echo "\">";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 73), 73, $this->source));
                        echo "</a> 

              ";
                        // line 75
                        if (twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 75)) {
                            // line 76
                            echo "              ";
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 76), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1)], 76, $context, $this->getSourceContext()));
                            echo "
              ";
                        }
                        // line 78
                        echo "          ";
                    }
                    // line 79
                    echo "         
         
      </li>

    ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 84
                echo "        
      ";
                // line 85
                if ((($context["menu_level"] ?? null) > 0)) {
                    // line 86
                    echo "      </ul>
    ";
                }
                // line 88
                echo "  ";
            }

            return ('' === $tmp = ob_get_contents()) ? '' : new Markup($tmp, $this->env->getCharset());
        } finally {
            ob_end_clean();
        }
    }

    public function getTemplateName()
    {
        return "themes/oshop/templates/menu--main.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  236 => 88,  232 => 86,  230 => 85,  227 => 84,  209 => 79,  206 => 78,  200 => 76,  198 => 75,  190 => 73,  186 => 71,  181 => 70,  178 => 69,  176 => 68,  169 => 67,  167 => 66,  164 => 65,  159 => 64,  156 => 63,  154 => 62,  147 => 61,  144 => 60,  138 => 58,  136 => 57,  130 => 55,  128 => 54,  121 => 53,  119 => 52,  114 => 51,  112 => 47,  111 => 46,  110 => 45,  109 => 44,  108 => 43,  106 => 42,  88 => 41,  84 => 39,  82 => 38,  79 => 37,  77 => 36,  74 => 35,  72 => 34,  69 => 33,  66 => 32,  63 => 31,  48 => 30,  41 => 28,  39 => 23,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Default theme implementation to display a menu.
 *
 * Available variables:
 * - menu_name: The machine name of the menu.
 * - items: A nested list of menu items. Each menu item contains:
 *   - attributes: HTML attributes for the menu item.
 *   - below: The menu item child items.
 *   - title: The menu link title.
 *   - url: The menu link url, instance of \\Drupal\\Core\\Url
 *   - localized_options: Menu link localized options.
 *   - is_expanded: TRUE if the link has visible children within the current
 *     menu tree.
 *   - is_collapsed: TRUE if the link has children within the current menu tree
 *     that are not currently visible.
 *   - in_active_trail: TRUE if the link is in the active trail.
 *
 * @ingroup themeable
 */
#}
{% import _self as menus %}
{#
  We call a macro which calls itself to render the full tree.
  @see http://twig.sensiolabs.org/doc/tags/macro.html
#}
{{ menus.menu_links(items, attributes, 0) }}

{% macro menu_links(items, attributes, menu_level) %}
  {% import _self as menus %}
  {% if items %}

    {% if menu_level == 1  %}
      <ul class=\"dropdown-menu\">
    {% elseif menu_level == 2  %}
      <ul class=\"dropdown-menu\">
    {% elseif menu_level > 0 %}
      <ul>
    {% endif %}
    {% for item in items %}
      {%
        set classes = [
          item.is_expanded ? 'dropdown',
          item.is_collapsed ? 'dropdown1',
          item.in_active_trail ? 'active',
          menu_level == 0 ? 'nav-item',
         
        ]
      %}
      <li{{ item.attributes.addClass(classes) }}>
          {% if menu_level == 0 %}
              <a href=\"{{ item.url }}\" class=\"nav-link dropdown-toggle\" ><span class=\"menu-label\">{{ item.title|raw }}</span></a>  
              {% if item.below and loop.last %}
                {{ menus.menu_links(item.below, attributes, menu_level + 1)|render|replace({'dm-align-2' : 'right'})|raw }}
             
              {% elseif item.below %}
              {{ menus.menu_links(item.below, attributes, menu_level + 1) }}
              {% endif %}
          {% elseif menu_level == 1 %}
              <a href=\"{{ item.url }}\"  class=\"dropdown-item\">{{ item.title|raw }}</a>
              {% if item.below %}
               <span class=\"arrow\"></span>
                {{ menus.menu_links(item.below, attributes, menu_level + 1) }}
              {% endif %}  
          {% elseif menu_level == 2 %}
              <a href=\"{{ item.url }}\"  class=\"dropdown-item\">{{ item.title|raw }}</a>
              {% if item.below %}
               { <span class=\"arrow\"></span>
                {{ menus.menu_links(item.below, attributes, menu_level + 1) }}
              {% endif %}  
          {% else %}
              <a href=\"{{ item.url }}\">{{ item.title|raw }}</a> 

              {% if item.below %}
              {{ menus.menu_links(item.below, attributes, menu_level + 1) }}
              {% endif %}
          {% endif %}
         
         
      </li>

    {% endfor %}
        
      {% if menu_level > 0 %}
      </ul>
    {% endif %}
  {% endif %}
{% endmacro %}", "themes/oshop/templates/menu--main.html.twig", "/var/www/html/themes/oshop/templates/menu--main.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("import" => 23, "macro" => 30, "if" => 32, "for" => 41, "set" => 43);
        static $filters = array("escape" => 51, "raw" => 53, "replace" => 55, "render" => 55);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['import', 'macro', 'if', 'for', 'set'],
                ['escape', 'raw', 'replace', 'render'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
