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

/* themes/oshop/templates/breadcrumb.html.twig */
class __TwigTemplate_b1f3a858faa149e0938dffe925153073 extends \Twig\Template
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
        // line 1
        if (($context["breadcrumb"] ?? null)) {
            // line 2
            echo "<nav aria-label=\"breadcrumb\">
    <ol class=\"breadcrumb breadcrumb-4 justify-content-end\">
        
        ";
            // line 5
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["breadcrumb"] ?? null));
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
                // line 6
                echo "        ";
                if (twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 6)) {
                    // line 7
                    echo "        \t";
                    if (twig_get_attribute($this->env, $this->source, $context["loop"], "first", [], "any", false, false, true, 7)) {
                        // line 8
                        echo "\t\t        <li class=\"breadcrumb-item\"><a href=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("<front>"));
                        echo "\"><i class=\"fas fa-home\"></i></a>
\t\t        </li>
\t      \t";
                    } else {
                        // line 11
                        echo "\t      \t   <li class=\"breadcrumb-item\"><a href=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 11), 11, $this->source), "html", null, true);
                        echo "\">";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "text", [], "any", false, false, true, 11), 11, $this->source), "html", null, true);
                        echo "</a>
\t      \t";
                    }
                    // line 13
                    echo "        ";
                } else {
                    // line 14
                    echo "          \t <li class=\"breadcrumb-item active\" aria-current=\"page\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "text", [], "any", false, false, true, 14), 14, $this->source), "html", null, true);
                    echo "</li>
        ";
                }
                // line 16
                echo "    ";
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
            // line 17
            echo "    </ol>
</nav>
";
        }
        // line 20
        echo "
";
    }

    public function getTemplateName()
    {
        return "themes/oshop/templates/breadcrumb.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  112 => 20,  107 => 17,  93 => 16,  87 => 14,  84 => 13,  76 => 11,  69 => 8,  66 => 7,  63 => 6,  46 => 5,  41 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% if breadcrumb %}
<nav aria-label=\"breadcrumb\">
    <ol class=\"breadcrumb breadcrumb-4 justify-content-end\">
        
        {% for item in breadcrumb %}
        {% if item.url  %}
        \t{% if loop.first %}
\t\t        <li class=\"breadcrumb-item\"><a href=\"{{ path('<front>') }}\"><i class=\"fas fa-home\"></i></a>
\t\t        </li>
\t      \t{% else %}
\t      \t   <li class=\"breadcrumb-item\"><a href=\"{{ item.url }}\">{{ item.text }}</a>
\t      \t{% endif %}
        {% else %}
          \t <li class=\"breadcrumb-item active\" aria-current=\"page\">{{ item.text }}</li>
        {% endif %}
    {% endfor %}
    </ol>
</nav>
{% endif %}

", "themes/oshop/templates/breadcrumb.html.twig", "/var/www/html/themes/oshop/templates/breadcrumb.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 1, "for" => 5);
        static $filters = array("escape" => 11);
        static $functions = array("path" => 8);

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for'],
                ['escape'],
                ['path']
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
